import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Table, Button } from 'antd';
import { I18nContext } from '../../locales';
import { ContentContainer } from '../../components/CommonStyles';

const { Title } = Typography;

const dataSource = [
  {
    key: 1,
    id: 1,
    content: 'text text text text text',
    address: 'address code',
    createdDate: '2020.04.30',
  },
];

export default () => {
  const history = useHistory();
  const { translate } = useContext(I18nContext);
  const loading = false;
  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'createdDate',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
  ];

  const handleCreate = () => {
    history.push('/positives/create');
  };

  return (
    <ContentContainer>
      <header>
        <Title level={4}>{translate('list')}</Title>
        <Button type="primary" size="large" onClick={handleCreate}>
          {translate('createItem')}
        </Button>
      </header>

      <section>
        <Table loading={loading} dataSource={dataSource} columns={columns.map((item: any) => {
          return {
            ...item,
            title: translate(item.title),
          };
        })} />
      </section>
    </ContentContainer>
  );
};
