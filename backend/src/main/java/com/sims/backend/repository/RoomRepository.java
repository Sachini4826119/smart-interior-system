package com.sims.backend.repository;

import com.sims.backend.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
    // JpaRepository already provides findAll(), save(), findById(), deleteById(),
    // etc.
}
