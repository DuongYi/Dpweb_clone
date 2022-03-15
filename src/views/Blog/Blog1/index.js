import React from 'react';

import Blog from 'src/components/Blog';
import Image from 'src/components/Image';

import classes from './Blog1.module.css';

function Blog1() {
  return (
    <Blog>
      <div className={classes.boxContent}>
        <h1>Cách cài winrar về máy tính</h1>

        <p style={{ lineHeight: 2 }}>
          <strong><em><u>&nbsp;Bước 1</u></em></strong>
          : Đầu tiên bạn cần tải WinRAR về máy tính. Vào
          {' '}
          <a href="https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-611.exe"><span style={{ color: '#1877f2' }}><strong><em><u>Link Này</u></em></strong></span></a>
          {' '}
          để tải Winrar với máy 64bit.
          <br />
          Còn vào
          {' '}
          <a href="https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x32-611.exe"><span style={{ color: '#1877f2' }}><strong><em><u>Link Này</u></em></strong></span></a>
          {' '}
          để tải winrar với máy 32bit
          <br />

          <br />
          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Cài đặt Winrar vào máy tính.
          <p>
            Tiến hành chạy file cài đặt vừa mới tải xuống.
          </p>
          <Image src="https://gofazone.com/wp-content/uploads/2020/01/jjfjf.png" width="auto" alt="bg" />
          <p>Nhấp chọn “Install”</p>
          <Image src="/static/images/blog/blog1/blog1-1.png" alt="bl1-1" />
          <p>
            Đến cửa sổ như hình bên dưới, ở mục Liên kết WinRAR với, bạn có
            thể tích chọn thêm vào tùy chọn ISO. Như vậy sau này bạn có thể
            dùng WinRAR để giải nén file iso. Các tùy chọn khác thì bạn để
            như mặc định. Nhấn nút “Đồng ý”.
          </p>

          <Image src="/static/images/blog/blog1/blog1-2.png" alt="bl1-2" />
          <p>Nhấp “OK” để hoàn tất quá trình cài đặt.</p>
        </p>
        <p>Chúc bạn thành công!!</p>

      </div>
    </Blog>

  );
}

export default Blog1;
