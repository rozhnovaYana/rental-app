const api_domain = process.env.NEXT_PUBLIC_API_DOMAIN;
export const fetchData = async (url: string) => {
  if (!api_domain) {
    return [];
  }
  try {
    const data = await fetch(url);

    return data.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};
