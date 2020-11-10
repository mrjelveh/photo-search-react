

import Axios from 'axios';

function getData(query: string,
    oriention?: string, 
    orderBy?: string, 
    perPage?: string,
    pageIndex?: string,
    colorVarition?: string) {
        console.log(query,oriention,orderBy,perPage,pageIndex,colorVarition);

        let orient = '',
            order_by = '',
            per_page: string = '',
            page: string = '',
            color = '',
            accessKey = 'Zgi7zJjtEUelBFtzGQYIp0BQbhc8n9dQ3cuCLuXnSSM';

        const baseUrl = 'https://api.unsplash.com/search/photos';
        oriention ? orient = `&orientation=${oriention}` : orient = '';
        orderBy ? order_by = `&order_by=${orderBy}` : order_by = '';
        perPage ? per_page = `&per_page=${perPage}` : per_page = '';
        pageIndex ? page = `&page=${pageIndex}` : page = '';
        colorVarition ? color = `&color=${colorVarition}` : color = '';

        console.log(orient,order_by,per_page,page,color);

return Axios.get(`${baseUrl}?query=${query}${orient}${order_by}${per_page}${page}${color}&client_id=${accessKey}`)

}

export default getData;