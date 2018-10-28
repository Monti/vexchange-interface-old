const translations = {
  en: {
    clickToCopy: 'Click to copy',
    price: 'price',
    fees: {
      label: 'fees',
      subtitle: 'The smart contract charges a 2% fee',
      minimumVET: 'MINIMUM VET DEPOSIT',
      minimunVTHO: 'MINIMUM VTHO DEPOSIT',
    },
    calculator: {
      label: 'Calculator',
      VETToVTHO: 'VET TO VTHO ESTIMATE',
      VTHOToVET: 'VTHO TO VET ESTIMATE',
      notice: 'This calculator pulls prices directly from the smart contract, however, another user may enter an order before you. As such, the end price may differ from what the calculator is displaying',
    },
    instructions: {
      1: 'Select VET or VTHO in your VeChain mobile wallet and press transfer.',
      2: 'Open the QR code scanner (top right corner) and scan the QR code to the right.',
      3: 'Enter the amount you would like to swap (must be higher than minimum) and complete the transaction.',
    },
    tips: {
      1: 'Save the exchange address to your contacts for convenient access and better security in the event the web interface gets compromised.',
      2: 'Recommended trade size is 100k VTHO / 12k VET or less',
      3: 'Due to a display issue with the mobile wallet, VTHO to VET trades will not properly display received VET',
    },
  },
  zh: {
    clickToCopy: '点击复制',
    price: '价格',
    fees: {
      label: '⼿续费',
      subtitle: '本智能合约收取2%的交易⼿续费',
      minimumVET: 'VET最低存款',
      minimunVTHO: 'VTHO最低存款',
    },
    calculator: {
      label: '计算器',
      VETToVTHO: 'VET>VTHO的估计值',
      VTHOToVET: 'VTHO>VET的的估计值',
      notice: '该计算器智能提取当前价格，如价格出现变化有可能是因为出现了新的订单结果',
    },
    instructions: {
      1: '在唯连移动钱包里选择VET或VTHO，并点击转账。',
      2: '在右上⻆，打开⼆维码扫码器。扫⼀扫VEXCHANGE的⼆维码。',
      3: '输⼊您想要交易的金额(必须超过最低限额)并完成交易。',
    },
    tips: {
      1: '如需为下⼀次交易提供⽅便，可保存交易地址到移动钱包的联系⼈。',
      2: '建议保持⼀次交易量不超过100,000VTHO或12,000VET。',
      3: '由于移动钱包的问题，在VTHO>VET的交易过程中获取的VET信息暂不能完整显示。',
    },
  }
};

export default translations;
