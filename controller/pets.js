/*controller*/
import { db } from "../database.js";

export const pets = (_, res) => {
    const query = "SELECT * FROM pets WHERE adotado = 'nao'";

    db.query(query, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const findPet = (req, res) => {
    const query = "SELECT * FROM pets WHERE `id`= ?";
    const index = [req.params.id];

    db.query(query, [index], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const adoptPet = (req, res) => {
    const query = "SELECT * FROM pets WHERE `adotado`= ?";
    const index = [req.params.adotado];

    db.query(query, [index], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const cadastrar = (req, res) => {
    const query = "INSERT INTO pets (`nome`, `idade`, `especie`, `raca`, `adotado`, `data_adocao`) VALUES (?)";

    const fields = [
        req.body.nome,
        req.body.idade,
        req.body.especie,
        req.body.raca,
        req.body.adotado,
        req.body.data_adocao,
    ];

    db.query(query, [fields], (err) => {
        if(err) return res.json(err);

        return res.status(201).json({message: "Pet Cadastrado com Sucesso! "});
    });
};

export const petsAdopt = (req, res) => {
    const query = "UPDATE pets SET nome = ?, idade = ?, especie = ?, raca = ?, adotado = ?, data_adocao = ? WHERE `id`= ?";
    const index = [req.params.id];
    const fields = [
        req.body.nome,
        req.body.idade,
        req.body.especie,
        req.body.raca,
        req.body.adotado,
        req.body.data_adocao,
    ];

    db.query(query, [...fields, index], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json({message: "Pet atualizado com Sucesso! "});
    });
};

export const deletar = (req, res) => {
    const query = "DELETE FROM pets WHERE `id`= ?";
    const index = [req.params.id];

    db.query(query, [index], (err) => {
        if(err) return res.json(err);

        return res.status(204).json({message: "Pet Deletado Com Sucesso!"});
    });
};