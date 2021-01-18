import React from 'react';

export default function PageNotFound(props){
    return(
        <div className="page-not-found container-fluid justify-content-center p-5">
            <div className="row">
            <div className="col text-center">
                <h1 className="display-1">Oops!<br></br>The page you are looking for doesn't exist!</h1>
            </div>
            </div>
        </div>
    );
}