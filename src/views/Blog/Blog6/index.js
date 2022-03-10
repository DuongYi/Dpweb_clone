import React from 'react';

import Blog from 'src/components/Blog';
import DivAds from 'src/components/DivAds';
import GoogleAd from 'src/components/GoogleAd';
import Image from 'src/components/Image';

import classes from './Blog6.module.css';

function Blog6() {
  return (
    <Blog>
      <div className={classes.boxContent}>
        <DivAds>
          <GoogleAd slot="4202773198" />
        </DivAds>
        <h1>Cách cài đặt Net4.8 (series tự làm mod cơ bản)</h1>
        <p style={{ lineHeight: 2 }}>
          <strong><em><u>&nbsp;Bước 1 </u></em></strong>
          <br />
          (Đối với những anh em đã cài dot net từ trước, thì sẽ check xem nếu
          dot net lớn hơn 4.8 thì không phải cài nữa, còn không thì ae tiếp tục ở bước 2)
          <br />
          <DivAds>
            <GoogleAd slot="4202773198" />
          </DivAds>
          <h5>Cách tra phiên bản dotnet đã cài</h5>
          <p>
            Gõ
            {' '}
            <b>PowerShell</b>
            {' '}
            vào thanh tìm kiếm menu Start, click chuột phải vào
            kết quả phù hợp nhất và chọn
            {' '}
            <b>Run as Administrator.</b>
          </p>
          <br />
          <Image src="/static/images/blog/Blog6/1.png" alt="bl6-1" />
          <br />
          <p>
            Cửa sổ PowerShell sẽ hiện lên và các bạn sẽ copy lệnh dưới đây vào để kiểm tra.
            Nếu kết quả trả ra là
            {' '}
            <b>true</b>
            {' '}
            thì là máy bạn đã có dotnet lớn hơn 4.8
            {' '}
          </p>
          <h5>
            <a href="http://cpp.sh/3m5df" style={{ textDecoration: 'underline', color: 'yellow' }}>Nhấp link để lấy code</a>
            {' '}
          </h5>
          <br />
          <DivAds>
            <GoogleAd slot="4202773198" />
          </DivAds>
          <br />
          <strong><em><u>&nbsp;Bước 2</u></em></strong>
          : Hướng dẫn cài đặt Net4.8
          <br />
          <p>
            Tải net4.8 theo link sau
            {' '}
            <a href="https://taimienphi.vn/download-microsoft-net-framework-1808/-48-phien-ban" style={{ textDecoration: 'underline', color: 'yellow' }}> Link net4.8</a>
          </p>
          <br />
          <p>
            Sau đó cài theo video sau nhé! Tôi cài rồi nền thôi ae tự tìm nhé, dễ thôi.
            {' '}
            <a style={{ textDecoration: 'underline', color: 'yellow' }} href="https://www.youtube.com/watch?v=gEAu0bVcwPg">Cách cài net4.8</a>
          </p>
          <DivAds>
            <GoogleAd slot="4202773198" />
          </DivAds>
          <p>Chúc bạn thành công!!</p>
          <h5>Tiếp theo chúng ta sẽ chuyển qua cách cài dnspy ở blog tiếp theo, ae đón đọc nhé!</h5>
        </p>
        <DivAds>
          <GoogleAd slot="4202773198" />
        </DivAds>
      </div>
    </Blog>

  );
}

export default Blog6;
