import React from 'react';
import { Modal, Spin } from 'antd';
import './ConfirmTransactionModal.css';

const ConfirmTransactionModal = ({visible = false}) => {
  return (
    <Modal className='confirm-transaction-modal' visible={visible} closable={false} footer={null}>
      <Spin/>
      <div>Confirm transaction in Metamask</div>
    </Modal>);
    
  //modal.destroy();
};

export default ConfirmTransactionModal;