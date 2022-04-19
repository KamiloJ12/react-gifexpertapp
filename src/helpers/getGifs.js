
export const getGifs = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=7lN5ubz0G3FO13uMmuww5jJKYtoW0B8b`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title, 
            url: img.images?.downsized.url
        }
    });

    return gifs;
}