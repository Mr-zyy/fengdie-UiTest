import React from 'react';
// import { useModalForm } from 'sunflower-antd';
// import { Modal, Input, Button, Form, Spin } from 'antd';
import { Form } from 'antd';

interface InfoModalProps {
  form: any;
}
const InfoModal: React.FC<InfoModalProps> = (() => {
  // const { form } = props;
  // const {
  //   modalProps,
  //   formProps,
  //   show,
  //   formLoading,
  //   formValues,
  //   formResult,
  // } = useModalForm({
  //   defaultVisible: false,
  //   autoSubmitClose: true,
  //   autoResetForm: true,
  //   async submit({username, email}) {
  //     console.log('beforeSubmit');
  //     await new Promise(r => setTimeout(r, 1000));
  //     console.log('afterSubmit', username, email);
  //     return 'ok';
  //   },
  //   form,
  // });

  return (
    <div>
      test
    </div>
  )
});
export default Form.create<InfoModalProps>()(InfoModal);
