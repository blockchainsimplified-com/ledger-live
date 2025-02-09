import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { ScreenName } from "../../const";
import LendingTerms from "../../screens/Lending/modals/InfoModals/TermsStep";
import LendingInfo1 from "../../screens/Lending/modals/InfoModals/Step-1";
import LendingInfo2 from "../../screens/Lending/modals/InfoModals/Step-2";
import LendingInfo3 from "../../screens/Lending/modals/InfoModals/Step-3";
import { CloseButton } from "../../screens/OperationDetails";
import Close from "../../icons/Close";
import { getStackNavigatorConfig } from "../../navigation/navigatorConfig";
import { Theme } from "../../colors";
import { LendingInfoNavigatorParamList } from "./types/LendingInfoNavigator";
import { StackNavigatorProps } from "./types/helpers";

const Stack = createStackNavigator<LendingInfoNavigatorParamList>();

const goBackOptions =
  (colors: Theme["colors"]) =>
  ({
    route: { params },
    navigation,
  }: StackNavigatorProps<
    LendingInfoNavigatorParamList,
    ScreenName.LendingInfo1 | ScreenName.LendingInfo2 | ScreenName.LendingInfo3
  >) => ({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          params?.endCallback && params.endCallback();
          const n = navigation.getParent() || navigation;
          n.canGoBack() && n.goBack();
        }}
        style={styles.buttons}
      >
        <Close size={18} color={colors.grey} />
      </TouchableOpacity>
    ),
  });

export default function LendingInfoNavigator() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const stackNavigationConfig = useMemo(
    () => getStackNavigatorConfig(colors, true),
    [colors],
  );
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        ...stackNavigationConfig,
        title: t("transfer.lending.info.title"),
        headerLeft: undefined,
        headerRight: () => <CloseButton navigation={navigation} />,
        gestureEnabled: false,
      })}
    >
      <Stack.Screen
        name={ScreenName.LendingInfo1}
        component={LendingInfo1}
        options={goBackOptions(colors)}
      />
      <Stack.Screen
        name={ScreenName.LendingInfo2}
        component={LendingInfo2}
        options={goBackOptions(colors)}
      />
      <Stack.Screen
        name={ScreenName.LendingInfo3}
        component={LendingInfo3}
        options={goBackOptions(colors)}
      />
      <Stack.Screen name={ScreenName.LendingTerms} component={LendingTerms} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  buttons: {
    padding: 16,
  },
});
