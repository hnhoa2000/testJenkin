import { Web3Storage, getFilesFromPath } from 'web3.storage';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE2RkU1RGZmNThjOTQ3M2M0QzIyMjY0M0U2OUY3MDAxODg2MDJFMzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODg5NjE5ODUyMTEsIm5hbWUiOiJ0ZXN0SXBmcyJ9.Nxp56UYC8Ema6oA76RfrOXaiHcRQa_p0MBR4JPJb2ac';
const client = new Web3Storage({ token });

async function storeFiles(path) {
    const files = await getFilesFromPath(path);
    const cid = await client.put(files)
    console.log(`https://dweb.link/ipfs/${cid}`)
}

//storeFiles('./helloworld.txt');
async function retrieve(cid) {
    const res = await client.get(cid);
    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    //console.log(res.files);
    //const status = await client.status(cid)
    //console.log(status);
    // for await (const upload of client.list()) {
    //     console.log(upload);
    //     console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`);
    // }
    console.log(res);
    const files = await res.files()
    for (const file of files) {
        console.log(file);
        console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
    }
}

//retrieve('bafybeiasckdwhirpgn2ouirzkzqoacmbezkffhlhzlp4q7yx5kyncufgtu')
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(3000);
