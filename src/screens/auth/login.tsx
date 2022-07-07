import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import Screen from "./../../components/layout/screen"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PRIMARY, WHITE } from "./../../constants/colors"
import Input from "./../../components/common/input"
import Button from "./../../components/common/button"
import { Title } from "./../../components/common/typography"

function HomeScreen() {
    const navigation = useNavigation()
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: any) => {
        if (data) {
            navigation.navigate("Start" as never)
        }
    }
    return (
        <Screen color={PRIMARY} style={{ alignItems: "center", justifyContent: "center" }}>
            <Title color={WHITE} size={32} style={{ marginBottom: 70 }}>
                Iniciar Sesión
            </Title>
            <View style={{ width: "60%" }}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { value, onChange } }) => (
                        <Input
                            label="Correo"
                            value={value}
                            onChange={onChange}
                            style={{ marginBottom: 35 }}
                            labelStyle={{ fontSize: 28 }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { value, onChange } }) => (
                        <Input
                            label="Contraseña"
                            value={value}
                            onChange={onChange}
                            style={{ marginBottom: 35 }}
                            labelStyle={{ fontSize: 28 }}
                        />
                    )}
                />
                <Button type="secondary" onPress={handleSubmit(onSubmit)}>
                    Entrar
                </Button>
            </View>
        </Screen>
    )
}

export default HomeScreen
