import * as Yup from 'yup';
export const yupExchangeBuyValidation = Yup.object().shape({
    currency: Yup.string(),
    amount: Yup.number().min(0.1),
    equivalence: Yup.number().min(500)
}) 