import React, { ChangeEvent,  ReactNode, useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCard,
    MDBCardBody
} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik } from 'formik';
import { CurrencyType } from '../model/currency-type';
import BuyExchangeComponent from './Exchange/Buy';
type Props = {
    className?: string;
    currencies: CurrencyType[];
    children?: ReactNode;
    style?: {};
    dtn: Number;
};

const ExchangeComponent = ({
    className = '',
    currencies,
    children,
    style,
    dtn,
}: Props) => {
    const [currency, setCurrency] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [nairaAmount, setNairaAmount] = useState<number>(0);
    const handleCurrencyChange = (event: ChangeEvent<HTMLInputElement>) => {
        let currency = event.target.value;
        setCurrency(currency);
        const { buy } = handleCurrencySelected(currency)[0];
        if (amount > 0) {
            setNairaAmount(
                parseFloat(Number(amount/ buy).toLocaleString('ens-Us', {
                    minimumFractionDigits: 8,
                    maximumFractionDigits: 8
                })
                )
            );
        }
    };
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        let amount = (event.target.value);
            setAmount(parseFloat(amount));
    }
    const [fillActive, setFillActive] = useState('sell');
    const handleFillClick = (value: string) => {
        if (value === fillActive) {
            return;
        }
        setFillActive(value);
    };
    /* get current selected currency data */
    const handleCurrencySelected = (currency: string) => {
        return currencies.filter(c => (c.name === currency));
    };
    const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
    return (
        <MDBCard className="shadow-lg shadow-5-strong hover-shadow bg-body rounded">
            <MDBCardBody>
                <MDBTabs fill className='mb-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('sell')} active={fillActive === 'sell'}>
                            Sell
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('buy')} active={fillActive === 'buy'}>
                            Buy
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={fillActive === 'sell'}>
                        <BuyExchangeComponent currencies={currencies} dtn={dtn}/>
                    </MDBTabsPane>
                    <MDBTabsPane show={fillActive === 'buy'}>
                        <FormControl fullWidth required>
                            <InputLabel id="currency-select-label">Currency</InputLabel>
                            <TextField
                                id="currency-select"
                                select
                                value={currency}
                                label="Currency"
                                onChange={handleCurrencyChange}
                                helperText="Select the currency you wish to buy"
                            >
                                {currencies.map((currency) => (
                                    <MenuItem key={currency.name} value={currency.name}>
                                        {currency.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                        <TextField
                            error={false}
                            fullWidth
                            label="You Send &#8358;"
                            helperText={String(`USD equivalent - 0.00 USD`)}
                            name="name"
                            value={String('')}
                            variant="outlined" />
                        <TextField
                            error={false}
                            fullWidth
                            helperText={String(` ETH = 2,102,439.04 NGN`)}
                            label="You Receive"
                            name="name"
                            value={String('')}
                            variant="outlined" />
                    </MDBTabsPane>

                </MDBTabsContent>
            </MDBCardBody>
        </MDBCard>
    )
}

export default ExchangeComponent;