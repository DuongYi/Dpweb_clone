import React from 'react';

import { Link } from 'react-router-dom';

import Blog from 'src/components/Blog';
import Image from 'src/components/Image';

import classes from './Blog7.module.css';

function Blog7() {
  return (
    <Blog>
      <div className={classes.boxContent}>

        <h1>Cách cài đặt dnspy (series tự làm mod cơ bản)</h1>
        <p style={{ lineHeight: 2 }}>
          <strong><em><u>&nbsp;Bước 1 </u></em></strong>
          <p>
            : Vào link github sau để tải bản dnspy mới nhất
            {' '}
            <a style={{ textDecoration: 'underline', color: 'yellow' }} href="https://github.com/dnSpy/dnSpy">https://github.com/dnSpy/dnSpy</a>
          </p>

          <p>sau đó bạn sẽ đến trang này: </p>
          <br />
          <Image src="/static/images/blog/Blog7/1.png" alt="bl7-1" />
          <br />
          <p>Click vào như mũi tên trong hình chỉ, cửa sổ sau sẽ hiện ra:</p>
          <br />
          <Image src="/static/images/blog/Blog7/2.png" alt="bl7-2" />
          <br />
          <p>Chọn bản dnspy phù hợp với máy bạn</p>
          <h5>bản win32 với máy 32bit</h5>
          <h5>bản win64 với máy 64bit</h5>
          <p>** Sau khi tải về bạn sẽ được 1 file .zip, như của mình là dnSpy-net-win64.zip</p>
          <br />
          <Image src="/static/images/blog/Blog7/3.png" alt="bl7-3" />
          <br />

          <br />
          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Hướng dẫn cài đặt dnspy
          <br />
          <p>Thực ra dnSpy ko cần cài đặt, ae chỉ cần giải nén là xài được rồi</p>
          <p>
            Nếu em ae chưa biết giải nén thì xem lại blog hướng dẫn giải nén của mình nhé
            {' '}
            <Link style={{ textDecoration: 'underline', color: 'yellow' }} to="/Blog/1">Hướng dẫn giải nén</Link>
            {' '}
          </p>
          <p>
            Các bạn chỉ cần vào file đã giải nén rồi click vào file dnSpy.exe
            là dùng được, dễ vl phải ko nào *-*
          </p>
          <br />
          <Image src="/static/images/blog/Blog7/4.png" alt="bl7-4" />
          <br />

          <p>Chúc bạn thành công!!</p>
          <h4>
            Fllow blog tiếp theo để tiếp tục series này nhé, blog sẽ được ra vào hôm sau!
            Hẹn gặp lại!
          </h4>
        </p>

      </div>
    </Blog>

  );
}

export default Blog7;
