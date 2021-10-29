import React, { ChangeEvent, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik } from 'formik';
import { CurrencyType } from '../../../model/currency-type';
import { exchangeBuyDefaultValue } from '../../../schema/exchangeBuyDefaultValue';
import { yupExchangeBuyValidation } from '../../../schema/yupExchangeBuyValidation';

type Props = {
    className?: string;
    currencies: CurrencyType[];
    children?: ReactNode;
    style?: {};
    dtn: Number;
};

const BuyExchangeForm = ({
    className = '',
    currencies,
    children,
    style,
    dtn,
}: Props) => {
    const [currency, setCurrency] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [equivalence, setEquivalence] = useState<number>(0);
    const handleCurrencyChange = (event: ChangeEvent<HTMLInputElement>) => {
        let currency = event.target.value;
        setCurrency(currency);
        const { buy } = handleCurrencySelected(currency)[0];
        if (amount > 0) {
            setEquivalence(
                parseFloat(Number(amount / buy).toLocaleString('ens-Us', {
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
    
    /* get current selected currency data */
    const handleCurrencySelected = (currency: string) => {
        return currencies.filter(c => (c.name === currency));
    };
    const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
    return (
        <Formik
            initialValues={exchangeBuyDefaultValue}
            validationSchema={yupExchangeBuyValidation}
            onSubmit={(values, formikHelpers) => {
                alert('submitted');
            }}
        >
            {formikProps => (
                <form
                    onSubmit={formikProps.handleSubmit}
                >
                    <FormControl fullWidth required className="mb-4">
                        <InputLabel id="currency-select-label">Select Currency</InputLabel>
                        <TextField
                            error={Boolean(
                                formikProps.touched.currency && formikProps.errors.currency
                            )}
                            id="currency-select"
                            select
                            name="currency"
                            value={formikProps.values.currency}
                            onBlur={formikProps.handleBlur}
                            onChange={formikProps.handleChange}
                            helperText={
                                formikProps.touched.currency && formikProps.errors.currency
                            }
                        >
                            {currencies.map((currency) => (
                                <MenuItem key={currency.name} value={currency.name}>
                                    {currency.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    <FormControl fullWidth required className="mb-4">
                        <TextField
                            error={Boolean(
                                formikProps.touched.amount && formikProps.errors.amount
                            )}
                            name="amount"
                            fullWidth
                            helperText={
                                formikProps.touched.amount && formikProps.errors.amount
                            }
                            label="You Send BTC"
                            type="number"
                            onBlur={formikProps.handleBlur}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.amount}
                            variant="outlined"
                            sx={{ display: formikProps.values.currency ? 'block' : 'none' }}
                        />
                        <FormHelperText>
                            {String(`USD equivalent - 0.00 USD`)}
                        </FormHelperText>
                    </FormControl>
                    <FormControl fullWidth required>
                        <TextField
                            error={Boolean(
                                formikProps.touched.equivalence && formikProps.errors.equivalence
                            )}
                            fullWidth
                            helperText={
                                formikProps.touched.equivalence && formikProps.errors.equivalence
                            }
                            name="equivalence"
                            label="You Receive &#8358;"
                            onBlur={formikProps.handleBlur}
                            onChange={formikProps.handleChange}
                            type="number"
                            value={formikProps.values.equivalence}
                            variant="outlined"
                            sx={{ display: formikProps.values.amount ? 'block' : 'none' }}
                        />
                        <FormHelperText>
                            {String(` ETH = 2,102,439.04 NGN`)}
                        </FormHelperText>
                    </FormControl>
                </form>
            )}
        </Formik>
    )
}

export default BuyExchangeForm;