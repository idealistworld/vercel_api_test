const url = 'https://vercel-api-test-gamma.vercel.app/8080/tshirt';

const getInformation = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getInformation();