#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9
MFRC522 rfid(SS_PIN, RST_PIN);  // Instance du lecteur RFID

void setup() {
  Serial.begin(9600);   // Initialisation de la communication série
  SPI.begin();          // Initialisation du bus SPI
  rfid.PCD_Init();      // Initialisation du module RFID
  Serial.println("Place your card on the reader.");
}

void loop() {
  // Vérifie si une nouvelle carte est présente
  if (!rfid.PICC_IsNewCardPresent()) {
    return;
  }

  // Sélectionne une carte RFID
  if (!rfid.PICC_ReadCardSerial()) {
    return;
  }

  // Stocke l'UID de la carte et l'envoie via le port série
  Serial.print("UID:");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i], HEX);  // Envoie l'UID au format hexadécimal
  }
  Serial.println();

  rfid.PICC_HaltA();  // Arrêter la communication avec la carte
  rfid.PCD_StopCrypto1();  // Arrête le chiffrement
  delay(1000);  // Attendre avant de lire une nouvelle carte
}
