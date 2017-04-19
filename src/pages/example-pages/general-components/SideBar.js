import React from 'react';

const PanelSpecial = ({ heading, items }) => (
  <div className="panel panel_special mblg">
    <div className="panel__heading">
      <h3 className="panel__title">{heading}</h3>
    </div>
    <div className="panel__body">
      <ul className="list-unstyled">
        {items.map((item) => (
          <li className="mbmd" key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <a href="#">Xem thêm</a>
    </div>
  </div>
);

const BlogItems = [
  'Thanh tra bổ nhiệm bà Trần Vũ Quỳnh Anh: Lộ nhiều sai sót',
  'Samsung Galaxy S8 và S8+ ra mắt với màn hình vô cực, 4G tốc độ 1 Gbps',
  'Phó chủ tịch phường nghỉ sinh, chủ tịch... lãnh đủ!',
  'Chi 1.500 USD/m2 mua nhà Home City, vì sao cư dân vẫn bức xúc?'
];
const Blog = () => (
  <PanelSpecial
    heading="Blog"
    items={BlogItems}
  />
);

const VocabBuilder = () => (
  <div className="panel panel_special mblg">
    <div className="panel__heading">
      <h3 className="panel__title">Vocab Builder</h3>
    </div>
    <div className="panel__body">
      <p>Word of the day:</p>
      <div className="txt-bold">Engineer</div>
      <p><em>(n.)</em> Suppose you meet a girl in a park. She's riding a bike. Taking off all her clothes she screams, "Take whatever you want!" If you take the bikes, you're an engineer</p>
      <a href="#">Xem thêm</a>
    </div>
  </div>
);

const QuizTestItems = [
  'CR7 nhíu mày không vui trước bức tượng xấu của mình',
  'Nam Du - điểm đến mùa hè cho những kẻ \'cuồng chân\'',
  'Bên trong căn hộ 20 triệu USD giữa lòng New York',
  'Sơn Tùng M-TP bị tố sao chép ý tưởng trang phục ở Seoul HOT'
]
const QuizTest = () => (
  <PanelSpecial
    heading="Quiz/Test"
    items={QuizTestItems}
  />
);

const LiveSessionItems = [
  'CR7 nhíu mày không vui trước bức tượng xấu của mình',
  'Nam Du - điểm đến mùa hè cho những kẻ \'cuồng chân\'',
  'Bên trong căn hộ 20 triệu USD giữa lòng New York',
  'Sơn Tùng M-TP bị tố sao chép ý tưởng trang phục ở Seoul HOT'
]
const LiveSession = () => (
  <PanelSpecial
    heading="Live Session"
    items={LiveSessionItems}
  />
);

export const SideBar = () => (
  <aside>
    <Blog />
    <VocabBuilder />
    <LiveSession />
    <QuizTest />
  </aside>
);
