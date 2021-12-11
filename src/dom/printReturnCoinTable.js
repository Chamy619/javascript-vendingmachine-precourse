import { DOM_ID_SELECTOR } from '../constants.js';
import makeCoinDomIdMapper from '../utils/makeCoinDomIdMapper.js';

const getCoinDomIdMapper = () => {
  return makeCoinDomIdMapper([
    DOM_ID_SELECTOR.coin500Quantity,
    DOM_ID_SELECTOR.coin100Quantity,
    DOM_ID_SELECTOR.coin50Quantity,
    DOM_ID_SELECTOR.coin10Quantity,
  ]);
};

const printReturnCoinTable = (coins) => {
  const coinDomIdMapper = getCoinDomIdMapper();

  for (let coin in coinDomIdMapper) {
    const $coinQuantity = document.getElementById(coinDomIdMapper[coin]);
    $coinQuantity.innerText = `${coins[coin]}개`;
  }
};

export default printReturnCoinTable;
