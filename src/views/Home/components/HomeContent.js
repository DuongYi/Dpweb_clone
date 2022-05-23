import React, {
  useCallback, useEffect, useRef, useState
} from 'react';

import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

import Button from 'src/components/Button';
// import CardInfo from 'src/components/CardInfo';
// import CardItem from 'src/components/CardItem';
import CardInItem from 'src/components/CardTool/CardInItem';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import 'src/style/HomeContent.css';
import axios from 'src/utils/axios';

// import AdsSlick from './AdsSlick';
import BlogSlick from './BlogSlick';

function HomeContent() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  const [tools, setTools] = useState([]);
  const toolRef = useRef(tools);

  // const [voucher, setVoucher] = useState([]);
  // const voucherRef = useRef(voucher);

  // const openNickMTHandler = () => {
  //   window.open('https://nickmt.com/', '_blank');
  // };

  const getTools = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/products/getall`);
      if (isMountedRef.current) {
        toolRef.current = response.data.data;
        setTools(response.data.data);
      }
    } catch (err) {
      enqueueSnackbar(err.response.status, { variant: 'error' });
    }
  }, [isMountedRef]);

  // const getVoucher = useCallback(async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API}/api/vouchers`
  //     );
  //     if (isMountedRef.current) {
  //       voucherRef.current = response.data.data;
  //       setVoucher(response.data.data);
  //     }
  //   } catch (err) {
  //     enqueueSnackbar(err.response.status, { variant: 'error' });
  //   }
  // }, [isMountedRef]);

  useEffect(() => {
    getTools();
  }, [getTools]);

  // useEffect(() => {
  //   getVoucher();
  // }, [getVoucher]);

  // const card = [
  //   {
  //     title: 'Tool',
  //     price: '8000',
  //     desTitle: 'Chức năng đang hoạt động',
  //     image: 'static/images/tool.png',
  //     description:
  //       'Bảo hành trọn đời|Không bán theo tháng|Hỗ trợ đổi key|Hỗ trợ chạy trên VPS',
  //     type: '/tools',
  //   },
  //   {
  //     title: 'Captcha',
  //     price: '9000',
  //     desTitle: 'Chức năng đang phát triển',
  //     image: 'static/images/captcha.png',
  //     description:
  //       'Đang phát triển|Đang nghĩ|Đang thở|Đang làm dở',
  //     type: '/captcha',
  //   },
  //   {
  //     title: 'VPS',
  //     price: '10000',
  //     desTitle: 'Chức năng đang phát triển',
  //     image: 'static/images/vps.png',
  //     description:
  //     'Đang phát triển|Đang nghĩ|Đang thở|Đang làm dở',
  //     type: '/VPS',
  //   },
  // ];

  return (
    <div className="Home-content-container">
      <div className="content">
        {/* <div className="content__AllProduct">
          <h1 className="AllProduct__Title">Tất cả sản phẩm</h1>
          <div className="AllProduct__body">
            <CardItem card={card[0]} />
            <CardItem card={card[1]} />
            <CardItem card={card[2]} />
          </div>
        </div> */}
        <div className="content__AllProduct" />

        <div className="content__Captcha">
          <div className="Captcha__thumbnail__wrap">
            <a href="/404">
              <img
                width="1200"
                height="600"
                src="/static/images/tool.png"
                alt=""
                className="Captcha__bg"
                data-lazy-loaded="1"
                sizes="(min-width: 735px) 864px, 96vw"
                loading="eager"
              />
            </a>
          </div>

          <div className="Captcha__body">
            <div className="Captcha__publication__meta">
              <div className="tags">
                <Link to="/tools" rel="tag">
                  TOOL NRO
                </Link>
                {/* <a href="https://nickmt.com/" target="_blank" rel="noreferrer">Shop nick</a>
                <a href="https://azngocrong.vn/" target="_blank" rel="noreferrer">Thanh lý nick</a> */}
                <Link to="/tools" rel="tag">
                  Xem tất cả
                </Link>
              </div>
            </div>
            <h1>
              <Link to="/tools">Dịch vụ Tool NRO </Link>
            </h1>
            <div className="Captcha__card__content">
              <h2>Uy tín, chất lượng nhất hiện nay</h2>
              <br />
              <h3 style={{ color: '#0008ff', marginBottom: '4px' }}>Danh sách tool hiện có:</h3>
              <div className="tools_all_divide">
                <p>
                  {tools.slice(0, Math.round(tools.length / 2)).map((tool) => (
                    <span className="Captcha__description" key={tool.id}>
                      <i className="fas fa-star" />
                      {' '}
                      <Link to={`/tools/${tool.id}`} className="tools_all_link">{tool.name}</Link>
                      {' '}
                      <br />
                    </span>
                  ))}
                </p>
                <p>
                  {tools.slice(Math.round(tools.length / 2), tools.length).map((tool) => (
                    <span className="Captcha__description" key={tool.id}>
                      <i className="fas fa-star" />
                      {' '}
                      {tool.price ? (
                        <Link to={`/tools/${tool.id}`} className="tools_all_link">{tool.name}</Link>
                      ) : (
                        <Link to={`/tools/${tool.id}`} className="tools_all_link">{tool.name}</Link>
                      )}

                      {!tool.price && (
                      <span
                        className="Captcha__free"
                      >
                        {' '}
                        Miễn phí
                      </span>
                      )}
                      {' '}
                      <br />
                    </span>
                  ))}
                </p>
                {/* <p>
                  {tools.slice(20, tools.length).map((tool) => (
                    <span className="Captcha__description" key={tool.id}>
                      <i className="fas fa-star" />
                      {' '}
                      <Link to={`/tools/${tool.id}`} className="tools_all_link">{tool.name}</Link>
                      {' '}
                      <br />
                    </span>
                  ))}
                </p> */}
              </div>

            </div>
          </div>
        </div>

        <div className="content__Pr1">
          <Link
            to="/tools"
            title="Click để xem chi tiết"
            className="Pr1__Title"
          >
            <div className="container__title">
              <div className="box">
                <h1>Hot Tool</h1>
              </div>
              <div className="gradient-border" />
            </div>
          </Link>
          <div className="btn-AllPr1">
            <Link to="/tools" title="Click để xem tất cả">
              <Button onClick={() => this} buttonStyle="btn--outline">
                <p>Xem tất cả</p>
              </Button>
            </Link>
          </div>
          <div className="Pr1__body">
            {tools.slice(0, 4).map((tool) => (
              <CardInItem key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="ads-container">
        <div className="axcontent">
          <a href="https://azngocrong.vn/" onClick={openNickMTHandler} target="_top" rel="noreferrer">
            <h1>
              <span>G</span>
              <span>i</span>
              <span>a</span>
              <span>n</span>
              {' '}
              <span>h</span>
              <span>à</span>
              <span>n</span>
              <span>g</span>
              {' '}
              <span>A</span>
              <span>z</span>
              <span>n</span>
              <span>g</span>
              <span>o</span>
              <span>c</span>
              <span>r</span>
              <span>o</span>
              <span>n</span>
              <span>g</span>
              {' '}
              <span>N</span>
              <span>i</span>
              <span>c</span>
              <span>k</span>
              <span>m</span>
              <span>t</span>
            </h1>
          </a>
          <AdsSlick />
        </div>
      </div> */}
      <div className="content">
        <div className="content__Pr2">
          <Link
            to="/tools"
            title="Click để xem chi tiết"
            className="Pr2__Title"
          >
            <div className="container__title">
              <div className="box">
                <h1>All Tool</h1>
              </div>
              <div className="gradient-border" />
            </div>
          </Link>
          <div className="btn-AllPr2">
            <Link to="/tools" title="Click để xem tất cả">
              <Button onClick={() => this} buttonStyle="btn--outline">
                <p>Xem tất cả</p>
              </Button>
            </Link>
          </div>
          <div className="Pr2__body" id="style-1">
            {tools.map((tool) => (
              <CardInItem key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
      <div className="blog-content">
        <Link to="/blogs">
          <h1>
            <span>Dũng Phạm&rsquo;</span>
            s
            {' '}
            <span>Blog</span>
          </h1>
        </Link>
        <BlogSlick />
      </div>
    </div>
  );
}

export default HomeContent;
