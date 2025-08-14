import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const CSVUploader = ({ onFileUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file && file.type === 'text/csv') {
            const reader = new FileReader();
            reader.onload = (event) => {
                const text = event.target.result;
                onFileUpload(text);
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid CSV file.');
        }
    }, [onFileUpload]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-4 text-center">
            <input {...getInputProps()} />
            <p>Drag 'n' drop a CSV file here, or click to select one</p>
        </div>
    );
};

export default CSVUploader;