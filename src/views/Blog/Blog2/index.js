import React from 'react';

import Blog from 'src/components/Blog';
import Image from 'src/components/Image';

import GoogleAd from '../../../components/GoogleAd';
import classes from './Blog2.module.css';

function Blog2() {
  return (
    <Blog>
      <div className={classes.boxContent}>
        <div className="container--ads">
          <GoogleAd slot="6995553534" auto="fluid" layout="in-article" />
        </div>
        <h1>Cách giải nén file</h1>
        <p style={{ lineHeight: 2 }}>
          <strong><em><u>&nbsp;Bước 1</u></em></strong>
          : Đầu tiên bạn chọn thư mục bị nén có đuôi .rar hoặc
          .zip. Sau đó click chuột phải vào tên file và chọn Extract files.
          <Image src="/static/images/blog/blog2/1.png" alt="bl2-1" />
          <br />
          <br />
          <div className="container--ads">
            <GoogleAd slot="6995553534" auto="fluid" layout="in-article" />
          </div>
          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Tiến hành giải nén
          <p>
            ** Phần Destination path là phần đường dẫn thư mục mà bạn sẽ giải nén file ra.
          </p>
          <Image src="/static/images/blog/blog2/2.png" alt="bl2-2" />
          <p>
            Nhấp chọn “OK” để hoàn tất quá trình giải nén.
          </p>
          <p>
            ** Kết quả sẽ được như sau
          </p>
          <Image src="/static/images/blog/blog2/3.png" alt="bl2-3" />
          <p>Chúc bạn thành công!!</p>
          <div className="container--ads">
            <GoogleAd slot="6995553534" auto="fluid" layout="in-article" />
          </div>
        </p>
      </div>
    </Blog>

  );
}

export default Blog2;
