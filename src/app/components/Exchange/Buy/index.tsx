import React, { ReactNode } from 'react';
import { CurrencyType } from '../../../model/currency-type';
import BuyExchangeForm from './BuyExchangeForm';

type Props = {
    className?: string;
    currencies: CurrencyType[];
    children?: ReactNode;
    style?: {};
    dtn: Number;
};
const BuyExchangeComponent = (
    {
        className = '',
        currencies,
        children,
        style,
        dtn,
    }: Props
) => {
    return (
        <BuyExchangeForm currencies={currencies} dtn={dtn} />
    );
};

export default BuyExchangeComponent;