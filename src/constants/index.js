/* eslint-disable import/prefer-default-export */
export const SALE = {
  sale: 1,
  day: '10/10'
};

export const DUMMY_BLOG = [
  {
    id: 1,
    image: '/static/images/blog/blog1/1.jpg',
    title: 'Cách cài đặt WinRAR',
    writer: 'Dương Vũ',
    daywrite: '05/03/2022',
  },
  {
    id: 2,
    image: 'https://i.ytimg.com/vi/cPF-xlsW9N8/hqdefault.jpg',
    title: 'Cách giải nén file',
    writer: 'Dương Vũ',
    daywrite: '05/03/2022',
  },
  {
    id: 3,
    image: 'https://www.vietsunshine.com.vn/wp-content/uploads/2019/02/C%E1%BA%A3nh-b%C3%A1o-L%E1%BB%97-h%E1%BB%95ng-nghi%C3%AAm-tr%E1%BB%8Dng-c%E1%BB%A7a-WinRaR-%E1%BA%A3nh-h%C6%B0%E1%BB%9Fng-t%E1%BB%9Bi-h%C3%A0ng-100-tri%E1%BB%87u-ng%C6%B0%E1%BB%9Di-d%C3%B9ng.jpg',
    title: 'Cách nén file',
    writer: 'Dương Vũ',
    daywrite: '06/03/2022',
  },
  {
    id: 4,
    image: '/static/images/blog/blog4/image.png',
    title: 'Cách tải bản tool/mod miễn phí trên website Dũng Phạm',
    writer: 'Dương Vũ',
    daywrite: '06/03/2022',
  },
];

export const DUMMY_ADS = [
  {
    id: 1,
    title: 'Nhập Nick tự động',
    image: '/static/images/azquangcao/nhapnick.gif',
    price: 'Tự động',
    link: 'https://azngocrong.vn/index.php?controller=vongquay&id=1',
  },
  {
    id: 2,
    title: 'Vòng quay siêu cấp',
    image: '/static/images/azquangcao/vqnicksc.gif',
    price: '11.000đ',
    link: 'https://azngocrong.vn/index.php?controller=vongquay&id=1',
  },
  {
    id: 3,
    title: 'Vòng quay có lãi',
    image: '/static/images/azquangcao/vqcl.gif',
    price: '13.000đ',
    link: 'https://azngocrong.vn/index.php?controller=vongquay&id=2',
  },
  {
    id: 4,
    title: 'Quay Nick 50 tỷ',
    image: '/static/images/azquangcao/vq50ty.gif',
    price: '20.000đ',
    description: 'Tất cả',
    link: 'https://azngocrong.vn/index.php?controller=vongquay&id=4',
  },
];

export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export const userConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE'
};
