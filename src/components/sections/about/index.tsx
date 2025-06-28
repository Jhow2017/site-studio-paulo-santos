import React from 'react';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@ds/components/global';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@ds/components/global';
import { Button } from '@ds/components/global';

//images
import RoomImg from '@/assets/imagens/about/sala.jpg';
import StudioImg from '@/assets/imagens/about/studio.jpg';
import ControlImg from '@/assets/imagens/about/controle.jpg';
import EquipmentImg from '@/assets/imagens/about/equipamentos.jpg';

const About = () => {
    return (
        <section
            id="sobre"
            className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Nossa <span className="text-red-600">Estrutura</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Conheça nosso estúdio equipado com tecnologia de ponta e
                        ambientes acusticamente tratados.
                    </p>
                </div>
                <Tabs defaultValue="estudio" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-900">
                        <TabsTrigger
                            value="estudio"
                            className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                        >
                            Estúdio
                        </TabsTrigger>
                        <TabsTrigger
                            value="equipamentos"
                            className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                        >
                            Equipamentos
                        </TabsTrigger>
                        <TabsTrigger
                            value="salas"
                            className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                        >
                            Salas
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="estudio">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <Image
                                    src={StudioImg}
                                    alt="Estúdio de gravação"
                                    width={500}
                                    height={300}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">
                                    Sala de Controle
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Nossa sala de controle é equipada com o que
                                    há de melhor em tecnologia de áudio.
                                    Monitoração precisa, acústica tratada e
                                    equipamentos de primeira linha para garantir
                                    o melhor resultado para seu projeto.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-red-600 mt-1"></i>
                                        <span className="text-gray-300">
                                            Console analógica SSL com 32 canais
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-red-600 mt-1"></i>
                                        <span className="text-gray-300">
                                            Monitores Genelec e Yamaha NS10
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-red-600 mt-1"></i>
                                        <span className="text-gray-300">
                                            Conversores de alta definição
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-red-600 mt-1"></i>
                                        <span className="text-gray-300">
                                            Tratamento acústico profissional
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={RoomImg}
                                    alt="Sala de gravação"
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover object-top transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={ControlImg}
                                    alt="Sala de controle"
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover object-top transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={EquipmentImg}
                                    alt="Equipamentos de gravação"
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover object-top transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Button
                                variant="outline"
                                className="bg-transparent border-red-600 hover:bg-red-600/20 text-red-600 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                <i className="fas fa-vr-cardboard mr-2"></i>{' '}
                                Tour Virtual 360°
                            </Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="equipamentos">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <i className="fas fa-sliders-h text-red-600 mr-3"></i>
                                    Áudio
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3">
                                            Pré-amplificadores
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Neve 1073 (4 canais)</li>
                                            <li>• API 512c (4 canais)</li>
                                            <li>
                                                • Universal Audio 610 (2 canais)
                                            </li>
                                            <li>
                                                • Focusrite ISA 428 (4 canais)
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3">
                                            Processadores
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Compressores 1176 e LA-2A</li>
                                            <li>• EQ Pultec EQP-1A</li>
                                            <li>• Distressor EL8X</li>
                                            <li>• SSL Bus Compressor</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3">
                                            Conversores
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Antelope Audio Orion 32+</li>
                                            <li>
                                                • Universal Audio Apollo x16
                                            </li>
                                            <li>• Apogee Symphony I/O</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <i className="fas fa-microphone-alt text-red-600 mr-3"></i>
                                    Microfones
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3">
                                            Condensadores
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Neumann U87, U47, TLM 103</li>
                                            <li>• AKG C414, C12 VR</li>
                                            <li>• Sony C800G</li>
                                            <li>• Telefunken ELA M 251E</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3">
                                            Dinâmicos
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Shure SM7B, SM57, SM58</li>
                                            <li>• Electrovoice RE20</li>
                                            <li>• Sennheiser MD421</li>
                                            <li>• Beyerdynamic M88</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3">
                                            Ribbon
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Royer R-121</li>
                                            <li>• AEA R84</li>
                                            <li>• Coles 4038</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <i className="fas fa-laptop text-red-600 mr-3"></i>
                                Software e Plugins
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="text-xl font-semibold mb-3">
                                        DAWs
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Pro Tools Ultimate</li>
                                        <li>• Logic Pro X</li>
                                        <li>• Ableton Live Suite</li>
                                        <li>• Cubase Pro</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-3">
                                        Plugins
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Waves Complete</li>
                                        <li>• Universal Audio UAD</li>
                                        <li>• Soundtoys</li>
                                        <li>• FabFilter</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-3">
                                        Instrumentos Virtuais
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Native Instruments Komplete</li>
                                        <li>
                                            • Spectrasonics (Omnisphere,
                                            Trilian)
                                        </li>
                                        <li>• Arturia V Collection</li>
                                        <li>• Output (Portal, Arcade, etc)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="salas">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                                <div className="h-64 overflow-hidden">
                                    <Image
                                        src="/images/salaA.jpg"
                                        alt="Sala A"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">
                                        Sala A - Gravação Principal
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-ruler text-red-600 mt-1"></i>
                                            <span>Área: 45m²</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-volume-up text-red-600 mt-1"></i>
                                            <span>
                                                Tratamento acústico premium com
                                                difusores e absorvedores
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-music text-red-600 mt-1"></i>
                                            <span>
                                                Piano de cauda Yamaha C7
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-users text-red-600 mt-1"></i>
                                            <span>
                                                Capacidade para gravação de
                                                bandas completas
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                                <div className="h-64 overflow-hidden">
                                    <Image
                                        src="/images/salaB.jpg"
                                        alt="Sala B"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">
                                        Sala B - Ensaio
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-ruler text-red-600 mt-1"></i>
                                            <span>Área: 35m²</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-volume-up text-red-600 mt-1"></i>
                                            <span>
                                                Isolamento acústico profissional
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-drum text-red-600 mt-1"></i>
                                            <span>
                                                Backline completo (bateria,
                                                amplificadores, PA)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-users text-red-600 mt-1"></i>
                                            <span>
                                                Capacidade para até 8 músicos
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                                <div className="h-64 overflow-hidden">
                                    <Image
                                        src="/images/salaC.jpg"
                                        alt="Sala C"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">
                                        Sala C - Cabine Vocal
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-ruler text-red-600 mt-1"></i>
                                            <span>Área: 8m²</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-volume-up text-red-600 mt-1"></i>
                                            <span>
                                                Isolamento acústico total
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-microphone text-red-600 mt-1"></i>
                                            <span>
                                                Setup de microfones premium
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-headphones text-red-600 mt-1"></i>
                                            <span>
                                                Monitoração de alta qualidade
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                                <div className="h-64 overflow-hidden">
                                    <Image
                                        src="/images/salaD.jpg"
                                        alt="Sala D"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">
                                        Sala D - Mixagem
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-ruler text-red-600 mt-1"></i>
                                            <span>Área: 25m²</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-volume-up text-red-600 mt-1"></i>
                                            <span>
                                                Acústica calibrada para mixagem
                                                precisa
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-sliders-h text-red-600 mt-1"></i>
                                            <span>
                                                Console SSL e monitoração
                                                Genelec
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="fas fa-couch text-red-600 mt-1"></i>
                                            <span>
                                                Ambiente confortável para
                                                sessões longas
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default About;
