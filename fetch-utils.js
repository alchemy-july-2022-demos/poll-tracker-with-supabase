const SUPABASE_URL = 'https://ibfimxopxwngijoyxknw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createNewPoll(data) {
    const resp = await client.from('polls').insert(data);
    console.log('resp', resp);
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}

export async function getPolls() {
    const resp = await client.from('polls').select('*');
    console.log('resp', resp);
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}
