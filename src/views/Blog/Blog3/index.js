import React from 'react';

import Blog from 'src/components/Blog';
import DivAds from 'src/components/DivAds';
import GoogleAd from 'src/components/GoogleAd';
import Image from 'src/components/Image';

import classes from './Blog3.module.css';

function Blog3() {
  return (
    <Blog>
      <div className={classes.boxContent}>
        <h1>Cách nén file</h1>
        <p style={{ lineHeight: 2 }}>
          <DivAds>
            <GoogleAd slot="4202773198" />
          </DivAds>
          <strong><em><u>&nbsp;Bước 1</u></em></strong>
          : Đầu tiên bạn chọn thư mục mà bạn muốn nén file.
          Sau đó click chuột phải và chọn Add to archive.
          <Image src="/static/images/blog/blog3/1.png" alt="bl3-1" />
          <p>** Có thể chọn luôn Add to .rar để tạo luôn file nén đuôi .rar </p>
          <br />
          <DivAds>
            <GoogleAd slot="4202773198" />
          </DivAds>
          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Tiến hành nén file
          <p>
            ** Phần Archive name là phần tên của bạn muốn sau khi nén file.
            Mặc định sẽ là tên thư mục bạn muốn nén.
          </p>
          <p>
            ** Phần Archive format là định dạng của file nén.
            các bạn có thể chọn .rar hoặc .zip.
            Ở đây tôi sẽ sử dụng .zip.
          </p>
          <Image src="/static/images/blog/blog3/2.png" alt="bl3-2" />
          <p>
            Nhấp chọn “OK” để hoàn tất quá trình nén.
          </p>
          <p>
            ** Kết quả sẽ được như sau
          </p>
          <Image src="/static/images/blog/blog3/3.png" alt="bl3-3" />
          <p>Chúc bạn thành công!!</p>
          <DivAds>
            <GoogleAd slot="4202773198" />
          </DivAds>
        </p>
      </div>
    </Blog>

  );
}

export default Blog3;
