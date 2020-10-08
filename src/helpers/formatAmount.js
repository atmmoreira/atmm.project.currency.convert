const formatAmount = (amount) => {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export { formatAmount }
