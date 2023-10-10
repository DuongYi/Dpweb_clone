/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { useLayoutEffect, useState } from 'react';

import { decode } from 'blurhash';

export function useBlurhash(blurhash, width, height, punch) {
  punch = punch || 1;

  const [url, setUrl] = useState(null);

  useLayoutEffect(() => {
    let isCancelled = false;
    width = '400';
    height = '300';
    if (!blurhash || !width || !height) return;

    const pixels = decode(blurhash, width, height, punch);
    console.log(pixels);
    // temporary canvas to create a blob from decoded ImageData
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    const imageData = context.createImageData(width, height);
    imageData.data.set(pixels);
    context.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
      if (!isCancelled) {
        setUrl((oldUrl) => {
          if (oldUrl) {
            URL.revokeObjectURL(oldUrl);
          }
          return URL.createObjectURL(blob);
        });
      }
    });

    return function cleanupBlurhash() {
      isCancelled = true;
      setUrl((oldUrl) => {
        if (oldUrl) {
          URL.revokeObjectURL(oldUrl);
        }
        return null;
      });
    };
  }, [blurhash, height, width, punch]);

  return url;
}
