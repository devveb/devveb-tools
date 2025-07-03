# 1단계: 빌드
FROM gradle:8.5.0-jdk17 AS builder

# 캐시 최적화를 위한 의존성 복사
COPY build.gradle settings.gradle ./
COPY gradle ./gradle
RUN gradle --no-daemon dependencies

# 전체 프로젝트 복사 후 빌드
COPY . .
RUN gradle build --no-daemon

# 2단계: 실행 이미지
FROM eclipse-temurin:17-jre

WORKDIR /app
COPY --from=builder /home/gradle/build/libs/*.jar app.jar

ENV SPRING_PROFILES_ACTIVE=render

# 실제 실행 명령어
CMD ["java", "-jar", "app.jar", "--spring.profiles.active=render"]
