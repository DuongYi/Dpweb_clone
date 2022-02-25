import React from 'react';

import classes from './Blog1.module.css';

function Blog() {
  return (
    <div className={classes.root}>
      <div className={classes.boxAds}>
        <section>
          <img src="https://hinhnen123.com/wp-content/uploads/2021/09/Chiem-nguong-5000-anh-4K-dep-tuyet-voi-chat-luong-cao-sac-net-49-scaled.jpg" alt="" width="100%" />
        </section>
      </div>

      <div className="boxContent">
        <h1>Cách cài winrar về máy tính</h1>
        <p>
          <strong><em><u>&nbsp;Bước 1</u></em></strong>
          : Đầu tiên bạn cần tải WinRAR về máy tính. Vào
          {' '}
          <a href="https://winrar.vi.softonic.com/"><span style={{ color: '#0000ff' }}><strong><em><u>Link Này</u></em></strong></span></a>
          {' '}
          để tải Winrar. Sau đó click vào mục “Tải về”.
        </p>
      </div>
    </div>
  );
}

export default Blog;
