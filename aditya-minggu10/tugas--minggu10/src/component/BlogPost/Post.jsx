import React from "react";
const Post = (props) => {
    return(
        <div className="post-artikel">
        {/* / <h2>Daftar Artikel</h2> */}
            <div className="artikel">
                <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="gambar tumbnail artikel" />
                </div>
                <div className="konten-artikel">
                    <p className="nim-artikel">{props.NIM}</p>
                    <p className="nama-artikel">{props.nama}</p>
                    <p className="alamat-artikel">{props.alamat}</p>
                    <p className="hp-artikel">{props.hp}</p>
                    <p className="angkatan-artikel">{props.angkatan}</p>
                    <p className="status-artikel">{props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
                 </div>
            </div>
        </div>
    )
}
export default Post;