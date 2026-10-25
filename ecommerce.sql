CREATE TABLE Client(
   id_clt INT,
   nom_clt VARCHAR(50) NOT NULL,
   prenom_clt VARCHAR(50) NOT NULL,
   email VARCHAR(50),
   Tel INT NOT NULL,
   pwd VARCHAR(20) NOT NULL,
   date_inscription DATETIME NOT NULL,
   PRIMARY KEY(id_clt),
   UNIQUE(Tel)
);

CREATE TABLE Categorie(
   Id_categorie INT,
   nom_categorie VARCHAR(50) NOT NULL,
   descript VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_categorie)
);

CREATE TABLE Panier(
   Id_panier INT,
   date_creation DATETIME NOT NULL,
   statut_panier LOGICAL NOT NULL,
   id_clt INT NOT NULL,
   PRIMARY KEY(Id_panier),
   FOREIGN KEY(id_clt) REFERENCES Client(id_clt)
);

CREATE TABLE Commande(
   Id_commande INT,
   date_commande DATETIME NOT NULL,
   montantT DECIMAL(15,2) NOT NULL,
   statut_commande LOGICAL NOT NULL,
   id_clt INT NOT NULL,
   PRIMARY KEY(Id_commande),
   FOREIGN KEY(id_clt) REFERENCES Client(id_clt)
);

CREATE TABLE Admin(
   Id_admin INT,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   mdp VARCHAR(20) NOT NULL,
   email VARCHAR(50) NOT NULL,
   statut_compte LOGICAL NOT NULL,
   date_creat DATETIME NOT NULL,
   PRIMARY KEY(Id_admin)
);

CREATE TABLE paiement(
   Id_paiement INT,
   Date_paiement DATETIME NOT NULL,
   montant_paye DECIMAL(15,2) NOT NULL,
   mode_paiement VARCHAR(50) NOT NULL,
   statut_paiement LOGICAL NOT NULL,
   ref_transaction VARCHAR(50) NOT NULL,
   Id_commande INT NOT NULL,
   PRIMARY KEY(Id_paiement),
   FOREIGN KEY(Id_commande) REFERENCES Commande(Id_commande)
);

CREATE TABLE Facture(
   Id_fact INT,
   num_fact VARCHAR(50) NOT NULL,
   date_fact DATETIME NOT NULL,
   montant_total DECIMAL(15,2) NOT NULL,
   Id_commande INT NOT NULL,
   PRIMARY KEY(Id_fact),
   UNIQUE(Id_commande),
   FOREIGN KEY(Id_commande) REFERENCES Commande(Id_commande)
);

CREATE TABLE Livraison(
   Id_liv INT,
   frais_liv DECIMAL(15,2) NOT NULL,
   date_liv DATETIME NOT NULL,
   statut_liv LOGICAL NOT NULL,
   transporteur VARCHAR(50) NOT NULL,
   adresse_liv VARCHAR(50) NOT NULL,
   Id_commande INT NOT NULL,
   PRIMARY KEY(Id_liv),
   UNIQUE(Id_commande),
   FOREIGN KEY(Id_commande) REFERENCES Commande(Id_commande)
);

CREATE TABLE Produit(
   Id_prod INT,
   nom_prod VARCHAR(50) NOT NULL,
   description VARCHAR(50) NOT NULL,
   prix_prod DECIMAL(15,2) NOT NULL,
   image_prod TEXT,
   statut_prod LOGICAL NOT NULL,
   Qte_stock INT NOT NULL,
   Id_categorie INT NOT NULL,
   PRIMARY KEY(Id_prod),
   FOREIGN KEY(Id_categorie) REFERENCES Categorie(Id_categorie)
);

CREATE TABLE contenir(
   Id_prod INT,
   Id_panier INT,
   qte INT NOT NULL,
   prix_unitaire DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(Id_prod, Id_panier),
   FOREIGN KEY(Id_prod) REFERENCES Produit(Id_prod),
   FOREIGN KEY(Id_panier) REFERENCES Panier(Id_panier)
);

CREATE TABLE comprendre(
   Id_prod INT,
   Id_commande INT,
   QteP INT NOT NULL,
   PrixUni DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(Id_prod, Id_commande),
   FOREIGN KEY(Id_prod) REFERENCES Produit(Id_prod),
   FOREIGN KEY(Id_commande) REFERENCES Commande(Id_commande)
);
