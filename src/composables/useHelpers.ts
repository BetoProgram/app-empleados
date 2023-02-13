import moment from 'moment'

export function useHelpers(){

    const formatoFechas = (value:any) => {
        return moment(value).format('DD-MM-YYYY');
    }

    return { formatoFechas }
}