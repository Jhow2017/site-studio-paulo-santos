import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@ds/components/global';
import { Button } from '@ds/components/global';

const Hero = () => {
    return (
        <section
            id="inicio"
            className="relative pt-20 min-h-screen flex items-center"
            style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20music%20studio%20with%20professional%20equipment%2C%20atmospheric%20lighting%20with%20red%20accents%2C%20high-end%20recording%20equipment%2C%20mixing%20console%2C%20microphones%2C%20and%20instruments%2C%20dark%20moody%20atmosphere%2C%20cinematic%20lighting%2C%20ultra-realistic%20photography&width=1440&height=800&seq=hero-bg-1&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50"></div>
            <div className="container mx-auto px-4 z-10 py-20">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Excelência em{' '}
                        <span className="text-red-600">Produção Musical</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        Produção Musical & Sala de Ensaio Profissional
                    </p>
                    <p className="text-lg mb-8 text-gray-300">
                        Transforme sua música em arte. Estúdio completo com
                        equipamentos de ponta e profissionais experientes para
                        levar seu som ao próximo nível.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Button
                            variant="destructive"
                            size="lg"
                            className="!rounded-button whitespace-nowrap cursor-pointer"
                        >
                            Agende Seu Ensaio
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent border-white hover:bg-white/10 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    <i className="fas fa-play mr-2"></i> Conheça
                                    Nosso Estúdio
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px] bg-black border-gray-800">
                                <DialogHeader>
                                    <DialogTitle>
                                        Conheça o RitmoStudio
                                    </DialogTitle>
                                    <DialogDescription>
                                        Um tour pelo nosso estúdio profissional
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="aspect-video bg-gray-900 rounded-md flex items-center justify-center">
                                    <i className="fas fa-play-circle text-6xl text-red-600"></i>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <p className="text-3xl font-bold text-red-600">
                                10+
                            </p>
                            <p className="text-gray-300">Anos de Experiência</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-600">
                                300+
                            </p>
                            <p className="text-gray-300">Artistas Atendidos</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-600">
                                1500+
                            </p>
                            <p className="text-gray-300">Projetos Concluídos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
