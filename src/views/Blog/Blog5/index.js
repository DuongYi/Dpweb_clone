import React from 'react';

import Blog from 'src/components/Blog';
import Image from 'src/components/Image';

import classes from './Blog5.module.css';

function Blog5() {
  return (
    <Blog>
      <div className={classes.boxContent}>

        <h1>Cách tắt Window Defender để cài tool</h1>
        <p style={{ lineHeight: 2 }}>
          <strong><em><u>&nbsp;Bước 1</u></em></strong>
          : Đầu tiên các bạn nhấn tổ hợp phím Window + R  để
          mở lên cửa sổ run của window
          <br />
          <Image src="/static/images/blog/Blog5/1.png" alt="bl5-1" />
          <br />
          <p>Sau đó các bạn nhập lệnh windowsdefender:/// như ở trong hình</p>
          <br />
          <Image src="/static/images/blog/Blog5/2.png" alt="bl5-2" />
          <br />

          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Một cửa sổ như trong hình bên dưới sẽ hiện lên. bạn nhấn vào Virus
          & threat protection.
          <br />
          <Image src="/static/images/blog/Blog5/3.png" alt="bl5-3" />
          <br />
          Sau đó chọn Manage Setting
          <br />
          <Image src="/static/images/blog/Blog5/4.png" alt="bl5-4" />
          <br />

          <strong><em><u>&nbsp;Bước 3</u></em></strong>
          <p>
            : Sau đó cửa sổ bên dưới sẽ hiện lên. Thường thì chỉ tắt mục đầu
            tiên là được nhưng cho chắc thì anh em cứ tắt hết đi nhé.
          </p>
          <br />
          <Image src="/static/images/blog/Blog5/5.png" alt="bl5-5" />
          <br />

          <p>Chúc bạn thành công!!</p>
        </p>

      </div>
    </Blog>

  );
}

export default Blog5;
