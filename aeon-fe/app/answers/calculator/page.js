"use client"
import React, { useState } from 'react';
import { Input, Button, notification } from 'antd';
import styles from './page.module.css';

const Calculator = () => {
  const [intNumber1, setIntNumber1] = useState(0);
  const [intNumber2, setIntNumber2] = useState(0);
  const [intTotal, setIntTotal] = useState(0);

  const handleAddTwoNumber = () => {
    let intNum1 = (intNumber1) ? parseFloat(intNumber1) : '';
    let intNum2 = (intNumber2) ? parseFloat(intNumber2) : '';
    if (isNaN(intNum1) || isNaN(intNum2)) {
      notification.error({
        message: "Please key in the valid numbers."
      })
    } else {
      if (intNum1 && intNum2) {
        setIntTotal(intNum1 + intNum2);
      } else {
        notification.error({
          message: "Please make sure to fill in both input first before adding."
        })
      }
    }
  }

  const handleResetInput = () =>{
    setIntNumber1(0);
    setIntNumber2(0);
    setIntTotal(0);
  }

  return (<div className="i-y-top x-center">
    <div className={styles.calculatorBody}>
      <p>Adding Two Numbers</p>
      <div className={styles.rowItem}>
        <Input placeholder="Key in any numbers" allowClear
          value={intNumber1 || ''}
          onChange={e => setIntNumber1(e.target.value)} />
      </div>
      <div className={styles.rowItem}>
        <Input placeholder="Key in any numbers" allowClear
          value={intNumber2 || ''}
          onChange={e => setIntNumber2(e.target.value)} />
      </div>
      <div className="i-x-right i-x-space-between">
        <Button type="primary" size="middle" ghost
          onClick={handleResetInput}>Reset
        </Button>
        <Button type="primary" size="middle"
          onClick={handleAddTwoNumber}>Add Two Number
        </Button>
      </div>
      <div className={styles.totalContainer}>
        <p><b>Total :</b> {intTotal || ''}</p>
      </div>
    </div>
  </div>)
}

export default Calculator