import React from 'react';
import { useModalForm } from 'sunflower-antd';
import { Modal, Input, Button, Form, Spin } from 'antd';

interface InfoModalProps {
  form: any;
}
const InfoModal: React.FC<InfoModalProps> = (props => {
  const { form } = props;
  const { 
    modalProps,
    formProps, 
    show, 
    formLoading,
    formValues,
    formResult,
  } = useModalForm({
    defaultVisible: false,
    autoSubmitClose: true,
    autoResetForm: true,
    async submit({username, email}) {
      console.log('beforeSubmit');
      await new Promise(r => setTimeout(r, 1000));
      console.log('afterSubmit', username, email);
      return 'ok';
    },
    form,
  });
  return (
    <div>
      <Modal
        {...modalProps}
        title="useModalForm"
        okText="submit"
        width={600}
      >
        <Spin spinning={formLoading}>
          <>
            <p>submit: username {(formValues as any).username} email {(formValues as any).email}</p>
            <p>result: {formResult}</p>
            <Form layout="inline" {...formProps}>
              <Form.Item label="Username">
                {
                  form.getFieldDecorator('username', {
                    rules: [
                      { required: true, message: '该字段不能为空' },
                    ]
                  })(
                    <Input placeholder="Username" />
                  )
                } 
              </Form.Item>

              <Form.Item label="Email">
                {
                  form.getFieldDecorator('email', {
                    rules: [
                      { required: true, message: '该字段不能为空' },
                    ]
                  })(
                    <Input placeholder="Email" />
                  )
                } 
              </Form.Item>
            </Form>
          </>
        </Spin>
      </Modal>
      <Button onClick={show}>show</Button>
    </div>
  )
});
export default Form.create<InfoModalProps>()(InfoModal);
