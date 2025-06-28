import React from 'react';
import { Button } from '@ds/components/global';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@ds/components/global';

const Services = () => {
    return (
        <section id="servicos" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Nossos <span className="text-red-600">Serviços</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Oferecemos soluções completas para todas as etapas do
                        seu projeto musical, desde a concepção até a
                        finalização.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                                <i className="fas fa-music text-red-600 text-xl"></i>
                            </div>
                            <CardTitle className="text-xl font-bold">
                                Produção Musical
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Transformamos suas ideias em produções
                                profissionais. Arranjos, gravação, edição e
                                finalização com equipamentos de alta qualidade.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Arranjos personalizados
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Gravação profissional
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Edição e finalização
                                    </span>
                                </li>
                            </ul>
                            <p className="text-lg font-semibold mb-4">
                                A partir de{' '}
                                <span className="text-red-600">R$ 800</span>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="destructive"
                                className="w-full !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Saiba Mais
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                                <i className="fas fa-drum text-red-600 text-xl"></i>
                            </div>
                            <CardTitle className="text-xl font-bold">
                                Sala de Ensaio
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Espaço acusticamente tratado com equipamentos de
                                primeira linha para ensaios profissionais de
                                bandas e artistas.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Tratamento acústico profissional
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Amplificadores e backline
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Sistema de PA completo
                                    </span>
                                </li>
                            </ul>
                            <p className="text-lg font-semibold mb-4">
                                A partir de{' '}
                                <span className="text-red-600">R$ 80</span>
                                /hora
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="destructive"
                                className="w-full !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Saiba Mais
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                                <i className="fas fa-sliders-h text-red-600 text-xl"></i>
                            </div>
                            <CardTitle className="text-xl font-bold">
                                Mixagem e Masterização
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Dê o acabamento profissional que sua música
                                merece com nossa mixagem e masterização de alta
                                qualidade.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Mixagem detalhada
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Masterização profissional
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-check text-red-600"></i>
                                    <span className="text-gray-300">
                                        Equipamentos analógicos e digitais
                                    </span>
                                </li>
                            </ul>
                            <p className="text-lg font-semibold mb-4">
                                A partir de{' '}
                                <span className="text-red-600">R$ 500</span>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="destructive"
                                className="w-full !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Saiba Mais
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Services;
