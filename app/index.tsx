import { useHeaderHeight } from '@react-navigation/elements';
import { LegendList } from '@legendapp/list';
import { cssInterop } from 'nativewind';

import { Text } from '~/components/nativewindui/Text';
import { View } from 'react-native';

cssInterop(LegendList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

export default function Screen() {
  return (
    <View>
      <Text className="text-5xl text-red-400 underline">ALKDJSDFSDFASKL</Text>
    </View>
  );
}
