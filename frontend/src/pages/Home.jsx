import React, { useEffect, useState } from 'react';
import api from '../api';

function Home() {
    const [animes, setAnimes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getAnimes();
    }, []);

    const getAnimes = () => {
        api
            .get("/api/animes/")
            .then((res) => res.data)
            .then((data) => {
                setAnimes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteAnime = (id) => {
        api
            .delete(`/api/animes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Anime deleted!");
                else alert("Failed to delete anime.");
                getAnimes();
            })
            .catch((error) => alert(error));
    };

    const createAnime = (e) => {
        e.preventDefault();
        api
            .post("/api/animes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Anime created!");
                else alert("Failed to make Anime.");
                getAnimes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {animes.map((anime) => (
                    <li key={anime.id}>
                        <h2>{anime.title}</h2>
                        <img src={anime.cover_image} alt={anime.title} />
                        <p>{anime.description}</p>
                        <button onClick={() => deleteAnime(anime.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            
            {/* <form onSubmit={createAnime}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Create Anime</button>
            </form> */}
        </div>
    );
}

export default Home;
