import React from 'react';

import Blog from 'src/components/Blog';
import Image from 'src/components/Image';

import classes from './Blog4.module.css';

function Blog4() {
  return (
    <Blog>
      <div className={classes.boxContent}>

        <h1>Cách tải tool/mod miễn phí trên website DungPham.com.vn</h1>
        <p style={{ lineHeight: 2 }}>
          <strong><em><u>&nbsp;Bước 1</u></em></strong>
          : Đầu tiên bạn truy cập website
          {' '}
          <a href="https://dungpham.com.vn/" style={{ color: 'red', textDecoration: 'underline' }}>Dungpham.com.vn</a>
          <br />
          <p>Sau đó tìm phần tool miễn phí trên banner Dịch vụ Tool NRO</p>
          <Image src="/static/images/blog/Blog4/image.png" alt="bl4-i" />
          <p>Hoặc nhấn vào Tool trên thanh điều hướng rồi kéo xuống cuối cùng</p>
          <Image src="/static/images/blog/Blog4/1.png" alt="bl4-1" />
          <br />

          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Tiến hành tải tool
          <p>
            Nhấp vào tải xuống
          </p>

          <Image src="/static/images/blog/Blog4/2.png" alt="bl4-2" />
          <p>
            ** Một cửa sổ Dialog sẽ hiện lên. Click Tải Tool/Mod để tải về
          </p>
          <p>
            <b>
              Nhân tiện giới thiệu nếu bạn muốn bán nick thì hãy truy cập ngay
              {' '}
              <a href="https://azngocrong.vn/" target="_blank" rel="noreferrer" style={{ color: 'red', textDecoration: 'underline' }}>Azngocrong.vn</a>
              {' '}
              để bán nick một cách tự động và nhanh nhất với giá hợp lý nhất.
              Nếu bạn muốn mua thêm nick hay thử may rủi với các vòng quay may mắn hãy truy cập
              {' '}
              <a href="https://azngocrong.vn/" target="_blank" rel="noreferrer" style={{ color: 'red', textDecoration: 'underline' }}>Azngocrong.vn</a>
              {' '}
              {' '}
              và
              {' '}
              <a href="https://nickmt.com/" target="_blank" rel="noreferrer" style={{ color: 'red', textDecoration: 'underline' }}>nickmt.com</a>
              {' '}
              {' '}
              để test ngay nhân phẩm của mình nhé!!
            </b>
            <br />

          </p>
          <Image src="/static/images/blog/Blog4/3.png" alt="bl4-3" />
          <strong><em><u>&nbsp;Bước 3:</u></em></strong>
          <p>
            Sau đó bạn sẽ được chuyển hướng sang link Driver
          </p>
          <p>
            ** Kết quả như sau:
          </p>
          <Image src="/static/images/blog/Blog4/4.png" alt="bl3-3" />
          <p>Click để theo hình trên để tải về máy nhé!</p>
          <br />

          <p>Chúc bạn thành công!!</p>
        </p>

      </div>
    </Blog>

  );
}

export default Blog4;
