

export const strapiClient = await fetch(`${import.meta.env.URL}`, { headers: { Authorization: '${import.meta.env.AUTHORIZATION} ${import.meta.env.STRAPI_API_KEY'}}).then(res => res.json());
