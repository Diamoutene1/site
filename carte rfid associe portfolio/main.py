import serial
import webbrowser

# Configuration du port série
ser = serial.Serial('/dev/ttyUSB0', 9600)  # Remplace '/dev/ttyUSB0' par le port série de ton Arduino

# Dictionnaire des UID et des URLs correspondantes
rfid_to_url = {
    'E431FBA': 'https://diamoutene1.github.io/site/',  # Remplacer par l'UID réel de ta carte
    # Ajoute d'autres UID et URLs ici si nécessaire
    '744C4BA': 'https://diamoutene1.github.io/site/', 
}

while True:
    if ser.in_waiting > 0:
        data = ser.readline().decode('utf-8').strip()  # Lire les données série
        print(f"Données reçues : '{data}'")  # Impression des données reçues
        
        # Vérifie si les données contiennent un UID (commence par "UID:")
        if data.startswith("UID:"):
            uid = data[4:].upper()  # Extraire l'UID et le mettre en majuscules
            print(f"UID de la carte : '{uid}'")  # Impression de l'UID extrait
            
            # Vérifie si l'UID correspond à une carte dans notre dictionnaire
            if uid in rfid_to_url:
                url = rfid_to_url[uid]
                print(f"Ouverture du lien : {url}")
                webbrowser.open(url)  # Ouvre l'URL dans le navigateur par défaut
            else:
                print("Carte inconnue.")
                print("UID disponibles :", list(rfid_to_url.keys()))  # Impression des UID disponibles
        else:
            print("Format incorrect des données.")
