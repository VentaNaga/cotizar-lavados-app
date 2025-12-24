import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles, COLORS} from '../styles/globalStyles';
import MapPin from '../assets/svg/map-pin.svg';
import ChevronDown from '../assets/svg/chevron-down.svg';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, paddingTop: insets.top, backgroundColor: COLORS.highlight}}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MapPin width={24} height={24} color={COLORS.primary} style={{marginLeft: 10}} />
          {/* Se requiere poder cambiar la ubicacion manualmente */}
          {/*Se requiere que esta ubicacion sea dinamica*/}
          <Text style={globalStyles.location}>Pudahuel, Santiago. </Text>
          <ChevronDown width={24} height={24} color={COLORS.primary} style={{marginLeft: -5, marginTop: 8}} />
        </View>
        <View>
          <Text style={globalStyles.text}>Mi Vehiculo:</Text>
          
        </View>
        <View>
            <Text style={globalStyles.title}>¿Qué es lo que estás buscando?</Text>
        </View>
    </View>
  );
}