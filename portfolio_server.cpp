#include <boost/beast/core.hpp>
#include <boost/beast/http.hpp>
#include <boost/beast/version.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

namespace beast = boost::beast;
namespace http = beast::http;
namespace net = boost::asio;
using tcp = net::ip::tcp;

// Fonction pour lire le contenu d'un fichier
std::string read_file(const std::string& path) {
    std::ifstream file(path);
    if (!file) {
        return ""; // Ne pas lire si le fichier n'existe pas
    }
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

// Fonction pour gérer les requêtes
void handle_request(http::request<http::string_body>& req, http::response<http::string_body>& res) {
    std::string target = std::string(req.target());

    // Route pour les pages HTML
    if (target == "/" || target == "/index.html") {
        res.set(http::field::content_type, "text/html");
        res.body() = read_file("index.html");
    } else if (target == "/appropos.html") {
        res.set(http::field::content_type, "text/html");
        res.body() = read_file("appropos.html");
    } else if (target == "/projet.html") {
        res.set(http::field::content_type, "text/html");
        res.body() = read_file("projet.html");
    } else if (target == "/contact.html") {
        res.set(http::field::content_type, "text/html");
        res.body() = read_file("contact.html");
    }
    // Route pour les fichiers CSS
    else if (target == "/css/style_page1.css") {
        res.set(http::field::content_type, "text/css");
        res.body() = read_file("public/css/style_page1.css");
    } else if (target == "/css/style_page2.css") {
        res.set(http::field::content_type, "text/css");
        res.body() = read_file("public/css/style_page2.css");
    } else if (target == "/css/style_page3.css") {
        res.set(http::field::content_type, "text/css");
        res.body() = read_file("public/css/style_page3.css");
    } else if (target == "/css/style_page4.css") {
        res.set(http::field::content_type, "text/css");
        res.body() = read_file("public/css/style_page4.css");
    }
    // Route pour les fichiers JS
    else if (target == "/js/index.js") {
        res.set(http::field::content_type, "application/javascript");
        res.body() = read_file("public/js/index.js");
    } else if (target == "/js/appropos.js") {
        res.set(http::field::content_type, "application/javascript");
        res.body() = read_file("public/js/appropos.js");
    } else if (target == "/js/projet.js") {
        res.set(http::field::content_type, "application/javascript");
        res.body() = read_file("public/js/projet.js");
    } else if (target == "/js/contact.js") {
        res.set(http::field::content_type, "application/javascript");
        res.body() = read_file("public/js/contact.js");
    }
    // Route pour les fichiers vidéo
    else if (target == "/video/api_flickr.mp4") {
        res.set(http::field::content_type, "video/mp4");
        res.body() = read_file("public/video/api_flickr.mp4");
    } else if (target == "/video/jeu_de_la_vie.mp4") {
        res.set(http::field::content_type, "video/mp4");
        res.body() = read_file("public/video/jeu_de_la_vie.mp4");
    } else if (target == "/video/jeu_du_serpent.mp4") {
        res.set(http::field::content_type, "video/mp4");
        res.body() = read_file("public/video/jeu_du_serpent.mp4");
    } else if (target == "/video/maquettes.mp4") {
        res.set(http::field::content_type, "video/mp4");
        res.body() = read_file("public/video/maquettes.mp4");
    }
    // Route pour les images
    else if (target == "/image/IMG_4705.jpg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/IMG_4705.jpg");
    } else if (target == "/image/cal1.jpeg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/cal1.jpeg");
    } else if (target == "/image/cal2.jpeg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/cal2.jpeg");
    } else if (target == "/image/image1.jpg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image1.jpg");
    } else if (target == "/image/image2.jpg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image2.jpg");
    } else if (target == "/image/image3.jpg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image3.jpg");
    } else if (target == "/image/image4.jpg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image4.jpg");
    } else if (target == "/image/image6.jpg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image6.jpg");
    } else if (target == "/image/image-boite.jpeg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image-boite.jpeg");
    } else if (target == "/image/image-linkedn.jpeg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/image-linkedn.jpeg");
    } else if (target == "/image/logo-git.jpeg") {
        res.set(http::field::content_type, "image/jpeg");
        res.body() = read_file("public/image/logo-git.jpeg");
    } else if (target == "/image/ZANA-DIAMOUTENE.pdf") {
        res.set(http::field::content_type, "application/pdf");
        res.body() = read_file("public/image/ZANA-DIAMOUTENE.pdf");
    } else {
        // Page non trouvée
        res.result(http::status::not_found);
        res.set(http::field::content_type, "text/html");
        res.body() = "404 - Page non trouvée";
    }
    
    res.prepare_payload();
}

// Fonction principale
int main() {
    try {
        net::io_context ioc;
        tcp::acceptor acceptor(ioc, {tcp::v4(), 8080});

        std::cout << "Serveur lancé sur http://localhost:8080" << std::endl;

        for (;;) {
            tcp::socket socket(ioc);
            acceptor.accept(socket);

            beast::flat_buffer buffer;
            http::request<http::string_body> req;
            http::read(socket, buffer, req);

            http::response<http::string_body> res{http::status::ok, req.version()};
            res.set(http::field::server, "C++ Portfolio Server");

            handle_request(req, res);

            http::write(socket, res);
            socket.shutdown(tcp::socket::shutdown_send);
        }
    } catch (std::exception const& e) {
        std::cerr << "Erreur : " << e.what() << std::endl;
    }

    return 0;
}
