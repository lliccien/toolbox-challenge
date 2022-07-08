import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
export default function FilesTable({ fileName }) {

    const [files, setFiles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let url = '';
            if (fileName) {
                url = `http://localhost:3500/files/data/?fileName=${fileName}`;
            } else {
                url = `http://localhost:3500/files/data`;
            }
            const response = await fetch(url);
            const json =  await response.json();

            let data = [];
            json.forEach((file) => {
                
                const name = file.file
                file.lines.forEach((line) => {
                    data.push({...line, name });
                });
            } )   

            setFiles(data);
        }
        
        fetchData();

    }, [fileName]);

  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
                </tr>
            </thead>
            <tbody>
                {files.map((file, index) => (
                    <tr key={index}>
                        <td>{file.name}</td>
                        <td>{file.text}</td>
                        <td>{file.number}</td>
                        <td>{file.hex}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  );
}
