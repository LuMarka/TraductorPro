import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  ScrollView,
  ActivityIndicator,
  Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

// Configuración de idiomas expandida con más opciones
const languages = [
  { name: "Español (Argentina)", code: "es-AR", translateCode: "es" },
  { name: "Español (España)", code: "es-ES", translateCode: "es" },
  { name: "Español (México)", code: "es-MX", translateCode: "es" },
  { name: "Inglés (US)", code: "en-US", translateCode: "en" },
  { name: "Inglés (UK)", code: "en-GB", translateCode: "en" },
  { name: "Francés", code: "fr-FR", translateCode: "fr" },
  { name: "Alemán", code: "de-DE", translateCode: "de" },
  { name: "Portugués (Brasil)", code: "pt-BR", translateCode: "pt" },
  { name: "Italiano", code: "it-IT", translateCode: "it" },
  { name: "Japonés", code: "ja-JP", translateCode: "ja" },
  { name: "Chino (Mandarín)", code: "zh-CN", translateCode: "zh" },
  { name: "Coreano", code: "ko-KR", translateCode: "ko" },
  { name: "Ruso", code: "ru-RU", translateCode: "ru" },
  { name: "Hebreo", code: "he-IL", translateCode: "he" },
  { name: "Armenio", code: "hy-AM", translateCode: "hy" },
  { name: "Árabe", code: "ar-SA", translateCode: "ar" },
  { name: "Hindi", code: "hi-IN", translateCode: "hi" },
  { name: "Turco", code: "tr-TR", translateCode: "tr" },
  { name: "Holandés", code: "nl-NL", translateCode: "nl" },
  { name: "Sueco", code: "sv-SE", translateCode: "sv" },
];

export default function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('es-ES');
  const [targetLanguage, setTargetLanguage] = useState('en-US');
  const [isLoading, setIsLoading] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Función para traducir texto usando API de MyMemory
  const translateText = async (text: string, sourceLang: string, targetLang: string) => {
    try {
      const sourceCode = languages.find(lang => lang.code === sourceLang)?.translateCode || 'es';
      const targetCode = languages.find(lang => lang.code === targetLang)?.translateCode || 'en';
      
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceCode}|${targetCode}`
      );
      
      if (!response.ok) {
        throw new Error('Error en la traducción');
      }
      
      const data = await response.json();
      
      if (data.responseStatus === 200) {
        return data.responseData.translatedText;
      } else {
        throw new Error('No se pudo traducir el texto');
      }
    } catch (error) {
      console.error('Error en traducción:', error);
      throw error;
    }
  };

  // Función principal para traducir y reproducir
  const handleTranslateAndSpeak = async () => {
    if (!inputText.trim()) {
      Alert.alert('Error', 'Por favor, escribe un mensaje.');
      return;
    }

    setIsLoading(true);
    setShowTranslation(false);

    try {
      // Traducir el texto
      const translated = await translateText(inputText, sourceLanguage, targetLanguage);
      setTranslatedText(translated);
      setShowTranslation(true);

      // Reproducir el texto traducido
      const speechOptions = {
        language: targetLanguage,
        pitch: 1.0,
        rate: 0.8,
      };

      await Speech.speak(translated, speechOptions);

    } catch (error) {
      Alert.alert('Error', 'No se pudo traducir el texto. Verifica tu conexión a internet.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header con gradiente */}
      <LinearGradient
        colors={['#3B82F6', '#1E40AF']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>
          <Ionicons name="language" size={28} color="white" /> Traductor Pro
        </Text>
        <Text style={styles.headerSubtitle}>
          Traduce y escucha en cualquier idioma
        </Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Área de texto de entrada */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu mensaje aquí..."
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            value={inputText}
            onChangeText={setInputText}
          />
        </View>

        {/* Selector de idioma de origen */}
        <View style={styles.languageSection}>
          <Text style={styles.sectionLabel}>
            <Ionicons name="create" size={16} color="#374151" /> Idioma de origen
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sourceLanguage}
              onValueChange={setSourceLanguage}
              style={styles.picker}
            >
              {languages.map((lang) => (
                <Picker.Item key={lang.code} label={lang.name} value={lang.code} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Icono de intercambio */}
        <View style={styles.exchangeContainer}>
          <Ionicons name="swap-vertical" size={24} color="#3B82F6" />
        </View>

        {/* Selector de idioma de destino */}
        <View style={styles.languageSection}>
          <Text style={styles.sectionLabel}>
            <Ionicons name="headset" size={16} color="#374151" /> Traducir a
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={targetLanguage}
              onValueChange={setTargetLanguage}
              style={styles.picker}
            >
              {languages.map((lang) => (
                <Picker.Item key={lang.code} label={lang.name} value={lang.code} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Botón de traducir */}
        <TouchableOpacity
          style={[styles.translateButton, isLoading && styles.translateButtonDisabled]}
          onPress={handleTranslateAndSpeak}
          disabled={isLoading}
        >
          <LinearGradient
            colors={isLoading ? ['#9CA3AF', '#6B7280'] : ['#3B82F6', '#1E40AF']}
            style={styles.buttonGradient}
          >
            {isLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Ionicons name="volume-high" size={20} color="white" />
            )}
            <Text style={styles.buttonText}>
              {isLoading ? 'Traduciendo...' : 'Traducir y Escuchar'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Área de resultado de traducción */}
        {showTranslation && translatedText && (
          <View style={styles.translationResult}>
            <Text style={styles.resultLabel}>Traducción:</Text>
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>{translatedText}</Text>
              <TouchableOpacity
                style={styles.playAgainButton}
                onPress={() => Speech.speak(translatedText, { language: targetLanguage })}
              >
                <Ionicons name="play" size={20} color="#3B82F6" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desarrollado y diseñado por P & M DevWeb
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#BFDBFE',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textInput: {
    padding: 20,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
    color: '#374151',
  },
  languageSection: {
    marginBottom: 15,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  picker: {
    height: 50,
  },
  exchangeContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  translateButton: {
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  translateButtonDisabled: {
    opacity: 0.7,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  translationResult: {
    marginBottom: 30,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  playAgainButton: {
    marginLeft: 15,
    padding: 10,
    backgroundColor: '#EBF8FF',
    borderRadius: 25,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});
