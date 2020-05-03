import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { I18nContext } from '../../locales';
import { ContentContainer, DetailForm } from '../../components/CommonStyles';
import FormField from '../../components/FormField';
import dataMap from './dataMap';
import { createAdminUserAction } from '../../redux/AdminUser/actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { translate } = useContext(I18nContext);
  const [form] = Form.useForm();

  const loading = useSelector((store: any) => store.loading.isLoading);


  const createUser = useCallback((data) => dispatch(createAdminUserAction(data)), [
    dispatch,
  ]);

  const handleBack = () => {
    history.goBack();
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        console.log(values);
        // createUser(values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const onRoleChange = () => {
    console.log('role was changed');
  }

  return (
    <ContentContainer>
      <header>
        <Button
          type="link"
          size="large"
          onClick={handleBack}
          icon={<ArrowLeftOutlined />}
        >
          {translate('back')}
        </Button>
        <Button type="primary" size="large" loading={loading} onClick={handleSubmit}>
          {translate('submit')}
        </Button>
      </header>

      <section>
        <DetailForm
          {...layout}
          form={form}
          name="createUser"
          size="large"
        >
          {dataMap &&
            dataMap.map((item: any) => (
              <FormField
                key={item.name}
                label={translate(item.label)}
                field={item}
                selectData={item.selectData}
              />
            ))}
        </DetailForm>
      </section>
    </ContentContainer>
  );
};
