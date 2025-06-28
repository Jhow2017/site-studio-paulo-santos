'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Button } from '@ds/components/global';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@ds/components/global';

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Cases de <span className="text-red-600">Sucesso</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Artistas e bandas que confiaram em nosso trabalho e
                        alcançaram resultados extraordinários.
                    </p>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 5000 }}
                    className="artist-swiper"
                >
                    <SwiperSlide>
                        <Card className="rounded-xl border text-card-foreground shadow bg-gray-900 border-gray-800 overflow-hidden h-full">
                            <div className="h-64 overflow-hidden">
                                <Image
                                    src="https://readdy.ai/api/search-image?query=brazilian%20rock%20band%20performing%20on%20stage%2C%20energetic%20performance%2C%20dramatic%20lighting%20with%20red%20highlights%2C%20high-quality%20professional%20photography%2C%20dark%20moody%20atmosphere%2C%20concert%20venue%2C%20musicians%20playing%20instruments&width=600&height=400&seq=artist-1&orientation=landscape"
                                    alt="Banda Trovão Negro"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">
                                    Banda Trovão Negro
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Rock Alternativo
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    &quot;O RitmoStudio foi fundamental para o
                                    sucesso do nosso último álbum.
                                    Profissionalismo e qualidade
                                    incomparáveis.&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-red-600 hover:bg-red-600/20 text-red-600 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="fas fa-play mr-2"></i>{' '}
                                        Ouvir
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
                            <div className="h-64 overflow-hidden">
                                <Image
                                    src="https://readdy.ai/api/search-image?query=female%20brazilian%20singer%20performing%20on%20stage%2C%20soulful%20expression%2C%20dramatic%20lighting%20with%20red%20highlights%2C%20high-quality%20professional%20photography%2C%20dark%20moody%20atmosphere%2C%20concert%20venue%2C%20elegant%20pose%20with%20microphone&width=600&height=400&seq=artist-2&orientation=landscape"
                                    alt="Mariana Luz"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">
                                    Mariana Luz
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    MPB / Soul
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    &quot;A produção do RitmoStudio elevou
                                    minhas composições a outro nível. Equipe
                                    incrível e estrutura de primeira.&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-red-600 hover:bg-red-600/20 text-red-600 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="fas fa-play mr-2"></i>{' '}
                                        Ouvir
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
                            <div className="h-64 overflow-hidden">
                                <Image
                                    src="https://readdy.ai/api/search-image?query=brazilian%20hip%20hop%20artist%20in%20recording%20studio%2C%20focused%20on%20creating%20music%2C%20dramatic%20lighting%20with%20red%20highlights%2C%20high-quality%20professional%20photography%2C%20dark%20moody%20atmosphere%2C%20recording%20equipment%20visible%2C%20urban%20style&width=600&height=400&seq=artist-3&orientation=landscape"
                                    alt="MC Visão"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">
                                    MC Visão
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Hip Hop / Trap
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    &quot;Minha carreira decolou depois da
                                    parceria com o RitmoStudio. Som limpo,
                                    mixagem perfeita e ambiente
                                    inspirador.&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-red-600 hover:bg-red-600/20 text-red-600 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="fas fa-play mr-2"></i>{' '}
                                        Ouvir
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
                            <div className="h-64 overflow-hidden">
                                <Image
                                    src="https://readdy.ai/api/search-image?query=brazilian%20samba%20band%20performing%20with%20traditional%20instruments%2C%20energetic%20performance%2C%20dramatic%20lighting%20with%20red%20highlights%2C%20high-quality%20professional%20photography%2C%20dark%20moody%20atmosphere%2C%20concert%20venue%2C%20musicians%20playing%20percussion&width=600&height=400&seq=artist-4&orientation=landscape"
                                    alt="Samba da Raiz"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">
                                    Samba da Raiz
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Samba / Pagode
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    &quot;A captação de instrumentos acústicos
                                    no RitmoStudio é impressionante. Conseguiram
                                    capturar a essência do nosso samba.&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-red-600 hover:bg-red-600/20 text-red-600 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="fas fa-play mr-2"></i>{' '}
                                        Ouvir
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="bg-transparent border-white hover:bg-white/10 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                        Ver Todos os Projetos
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
