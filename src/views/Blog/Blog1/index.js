import React from 'react';

import Footer from 'src/components/Footer';

import classes from './Blog1.module.css';

function Blog() {
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.boxAds}>
            <div>
              <img src="https://dailyfb88.com/wp-content/uploads/2021/03/fb88aff.926x407.jpg" alt="" width="100%" />
            </div>
          </div>

          <div className="boxContent">
            <h1>Cách cài winrar về máy tính</h1>
            <p style={{ lineHeight: 2 }}>
              <strong><em><u>&nbsp;Bước 1</u></em></strong>
              : Đầu tiên bạn cần tải WinRAR về máy tính. Vào
              {' '}
              <a href="https://winrar.vi.softonic.com/"><span style={{ color: '#0000ff' }}><strong><em><u>Link Này</u></em></strong></span></a>
              {' '}
              để tải Winrar. Sau đó click vào mục “Tải về”.
              <br />
              <br />
              <strong><em><u>&nbsp;Bước 2</u></em></strong>
              : Cài đặt Winrar vào máy tính.
              <p>
                ** Dưới đây mình hướng dẫn cài bản tiếng Việt nhé,
                bản tiếng Anh các bạn cũng cài tương tự thôi nhé.
              </p>
              <p>
                Tiến hành chạy file cài đặt vừa mới tải xuống.
              </p>
              <img src="https://gofazone.com/wp-content/uploads/2020/01/jjfjf.png" width="auto" alt="bg" />
              <p>Nhấp chọn “Cài đặt”</p>
              <img src="https://gofazone.com/wp-content/uploads/2020/01/w2.png" alt="" />
              <p>
                Đến cửa sổ như hình bên dưới, ở mục Liên kết WinRAR với, bạn có
                thể tích chọn thêm vào tùy chọn ISO. Như vậy sau này bạn có thể
                dùng WinRAR để giải nén file iso. Các tùy chọn khác thì bạn để
                như mặc định. Nhấn nút “Đồng ý”.
              </p>
              <img src="https://gofazone.com/wp-content/uploads/2020/01/w3.png" alt="" />
              <p>Nhấp “Xong” để hoàn tất quá trình cài đặt.</p>
            </p>
          </div>
        </div>
        <div className={classes.container_adsleft}>
          <img src="https://dailyfb88.com/wp-content/uploads/2020/05/aff-banner.gif" alt="" />
        </div>
        <div className={classes.container_adsright}>
          <img src="https://dailyfb88.com/wp-content/uploads/2020/05/aff-banner.gif" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
